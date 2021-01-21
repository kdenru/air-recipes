export const formatTime = (seconds: number): string => {
  const minutes = seconds / 60;
  return minutes >= 60 ? `${minutes / 60} hours` : `${minutes} min`;
};
