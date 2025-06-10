"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, Clock, Truck } from "lucide-react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Badge } from "./components/Badge";
import styles from "./App.module.css";

interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  transport_cost?: number | null;
  per_tonne_cost?: number | null;
}

interface TransformedSkip {
  id: string;
  name: string;
  size: string;
  price: number;
  hire_period: number;
  description: string;
  originalData: Skip;
}

const steps = [
  { id: 1, name: "Postcode", completed: true },
  { id: 2, name: "Waste Type", completed: true },
  { id: 3, name: "Select Skip", active: true },
  { id: 4, name: "Permit Check", completed: false },
  { id: 5, name: "Choose Date", completed: false },
  { id: 6, name: "Payment", completed: false },
];

function App() {
  const [selectedSkip, setSelectedSkip] = useState<TransformedSkip | null>(
    null
  );
  const [skips, setSkips] = useState<TransformedSkip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkips();
  }, []);

  const transformSkipData = (apiSkip: Skip): TransformedSkip => {
    const priceWithVat = Math.round(
      apiSkip.price_before_vat * (1 + apiSkip.vat / 100)
    );

    // Generate description based on skip size
    const getDescription = (size: number) => {
      if (size <= 4)
        return "Perfect for small home projects and garden clearance";
      if (size <= 6) return "Ideal for medium-sized renovations and clear-outs";
      if (size <= 8) return "Great for larger projects and construction waste";
      if (size <= 10) return "Suitable for major home renovations";
      if (size <= 12) return "Perfect for large construction projects";
      return "Our largest skip for major commercial work";
    };

    return {
      id: apiSkip.id.toString(),
      name: `${apiSkip.size} Yard Skip`,
      size: apiSkip.size.toString(),
      price: priceWithVat,
      hire_period: apiSkip.hire_period_days,
      description: getDescription(apiSkip.size),
      originalData: apiSkip,
    };
  };

  const fetchSkips = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      const data: Skip[] = await response.json();
      const transformedSkips = data.map(transformSkipData);
      setSkips(transformedSkips);
    } catch (error) {
      console.error("Failed to fetch skips:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSkipSelect = (skip: TransformedSkip) => {
    setSelectedSkip(skip);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      console.log("Continue with skip:", selectedSkip);
    }
  };

  return (
    <div className={styles.app}>
      {/* Progress Steps */}
      <div className={styles.progressContainer}>
        <div className={styles.progressWrapper}>
          <div className={styles.progressSteps}>
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step Item */}
                <div className={styles.stepItem}>
                  <div
                    className={`${styles.stepCircle} ${
                      step.completed
                        ? styles.completed
                        : step.active
                        ? styles.active
                        : styles.inactive
                    }`}
                  >
                    {step.completed ? (
                      <Check className={styles.buttonIcon} />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`${styles.stepLabel} ${
                      step.active
                        ? styles.active
                        : step.completed
                        ? styles.completed
                        : styles.inactive
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                
                {/* Connector between steps */}
                {index < steps.length - 1 && (
                  <div
                    className={`${styles.stepConnector} ${
                      step.completed ? styles.active : styles.inactive
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Choose Your Perfect Skip Size</h1>
          <p className={styles.subtitle}>
            Select the skip size that best suits your project needs. All prices
            include delivery, collection, and disposal.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className={styles.loading}>
            <p>Loading available skips...</p>
          </div>
        ) : (
          <>
            {/* Skip Grid */}
            <div className={`${styles.skipGrid} md-grid-2 lg-grid-3`}>
              {skips.map((skip) => (
                <Card
                  key={skip.id}
                  selected={selectedSkip?.id === skip.id}
                  onClick={() => handleSkipSelect(skip)}
                >
                  {/* Skip Image */}
                  <div className={styles.skipImage}>
                    <div className={styles.imageContent}>
                      <Truck className={styles.truckIcon} />
                      <Badge>{skip.size} Yards</Badge>
                    </div>
                    {selectedSkip?.id === skip.id && (
                      <div className={styles.selectedIcon}>
                        <Check className={styles.selectedCheckIcon} />
                      </div>
                    )}
                  </div>

                  {/* Skip Details */}
                  <div className={styles.skipDetails}>
                    <h3 className={styles.skipName}>{skip.name}</h3>
                    <p className={styles.skipDescription}>{skip.description}</p>
                    <div className={styles.hirePeriod}>
                      <Clock className={styles.clockIcon} />
                      {skip.hire_period} day hire period
                    </div>
                    <div className={styles.priceRow}>
                      <div className={styles.price}>£{skip.price}</div>
                      <Button
                        variant={
                          selectedSkip?.id === skip.id ? "primary" : "outline"
                        }
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSkipSelect(skip);
                        }}
                      >
                        {selectedSkip?.id === skip.id ? "Selected" : "Select"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Selected Skip Summary */}
            {selectedSkip && (
              <div className={styles.selectedSummary}>
                <div className={styles.summaryContent}>
                  <div className={styles.summaryLeft}>
                    <h3>Selected: {selectedSkip.name}</h3>
                    <p>
                      {selectedSkip.hire_period} day hire period • £
                      {selectedSkip.price}
                    </p>
                  </div>
                  <div className={styles.summaryRight}>
                    <div className={styles.summaryPrice}>
                      £{selectedSkip.price}
                    </div>
                    <div className={styles.summaryLabel}>Total cost</div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className={styles.navigation}>
              <Button variant="outline" size="large">
                <ArrowLeft className={styles.buttonIcon} />
                Back
              </Button>

              <Button
                size="large"
                onClick={handleContinue}
                disabled={!selectedSkip}
              >
                Continue
                <ArrowRight className={styles.buttonIcon} />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
