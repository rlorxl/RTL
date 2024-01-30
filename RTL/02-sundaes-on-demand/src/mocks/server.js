import { setupServer } from 'msw/mode';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
