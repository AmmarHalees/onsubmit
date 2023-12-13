import { alphanumeric } from './patterns';
import { Rule } from './types';

const getBankBranchRules = (t): Record<string, Rule> => ({
  required: {
    value: true,
    message: t('Payment.validation.required-field')
  }
});

const getReferenceIdRules = (t): Record<string, Rule> => ({
  required: {
    value: true,
    message: t('Payment.validation.required-field')
  }
});

const getIbanRules = (t): Record<string, Rule> => ({
  required: {
    value: false,
    message: ''
  },
  pattern: {
    value: alphanumeric,
    message: t('Payment.validation.alphanumeric')
  }
});

const getDescriptionRules = (t): Record<string, Rule> => ({
  required: {
    value: false,
    message: ''
  }
});

const getAttachmentsRules = (t): Record<string, Rule> => ({
  required: {
    value: true,
    message: t('Payment.validation.required-field')
  }
});

const getBankNameRules = (t): Record<string, Rule> => ({
  required: {
    value: true,
    message: t('Payment.validation.required-field')
  }
});

export {
  getBankBranchRules,
  getReferenceIdRules,
  getIbanRules,
  getDescriptionRules,
  getAttachmentsRules,
  getBankNameRules
};
