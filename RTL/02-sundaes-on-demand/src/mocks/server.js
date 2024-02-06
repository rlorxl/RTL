import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { optionType } from '../pages/entry/constants/option';

export const server = setupServer(...handlers(optionType.TOPPINGS));
