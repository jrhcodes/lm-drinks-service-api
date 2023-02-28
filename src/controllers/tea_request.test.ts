import request from 'supertest';
import { app } from '../app';


test('GET /tea with no param should return correct object',
    async () => {
        const res = await request(app)
            .get('/tea')
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'English Breakfast',
        });
    });

test('GET /tea with different param should return correct object', async () => {
    const res = await request(app)
        .get('/tea')
        .query({ teaName: 'Darjeeling' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Darjeeling',
    });
});

test('GET /tea should return correct object', async () => {
    const res = await request(app)
        .get('/tea')
        .query({ teaName: 'English Breakfast' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'English Breakfast',
    });
});