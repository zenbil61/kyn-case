/**
 * Api Call için mock server'ı ayağı kaldırıyoruz
 */
import { server } from './src/mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
