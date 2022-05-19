import supertest from "supertest";
import app from "..";
const imgProcApi = supertest(app);
describe('Testing /api/imgProc endpoint', () => {
    it('Test the entry endpoint GET /api',async () => {
        const response = await imgProcApi.get('/api');
        expect(response.status).toBe(200);
    });
    it('gives status OK 200 if image provided and existed in images folder',async () => {
        const response = await imgProcApi.get('/api/imgProc?image=santamonica&w=200&h=60');
        expect(response.status).toBe(200);
    });
})