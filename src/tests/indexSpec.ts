import supertest from "supertest";
import app from '../index';

const request = supertest(app);

describe('test / endpoint',() => {
    it('verifying endpoint is working',  async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    })
})