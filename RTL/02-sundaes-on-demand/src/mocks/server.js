import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { optionType } from '../constants/option';

export const server = setupServer(...handlers(optionType.SCOOPS));
