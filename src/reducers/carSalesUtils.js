export const addFeatureToBuy = (features, featureToAdd) => {
  const existingCarFeatures = features.find(
    (feature) => feature.id === featureToAdd.id
  );

  if (existingCarFeatures) {
    return features.map((feature) =>
      feature.id === featureToAdd.id
        ? { ...feature, features: feature }
        : feature
    );
  }
};
