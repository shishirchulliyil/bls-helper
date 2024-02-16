import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useSoic = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { label: t('soic.step1'), imagePath: 'src/assets/images/step1.png' },
    { label: t('soic.step2'), imagePath: 'src/assets/images/step2.png' },
    { label: t('soic.step3'), imagePath: 'src/assets/images/step3.png' },
    { label: t('soic.step4'), imagePath: 'src/assets/images/step4.png' },
    { label: t('soic.step5'), imagePath: 'src/assets/images/step5.png' },
    { label: t('soic.step6'), imagePath: 'src/assets/images/step6.png' },
    { label: t('soic.step7'), imagePath: 'src/assets/images/step7.png' },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return {
    activeStep,
    handleNext,
    handleBack,
    handleReset,
    steps,
    t,
  };
};
