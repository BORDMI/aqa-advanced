import { JsonPlaceholderApi } from '../core/api/services/JsonPlaceholderApi.js';

const api = new JsonPlaceholderApi();

describe('JSONPlaceholder API', () => {
  describe('GET /posts', () => {
    test('Check if the API returns 200 and array of 100 posts', async () => {
      const res = await api.getPosts();

      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data).toHaveLength(100);
      expect(res.data[0]).toMatchObject({
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
      });
    });
  });

  describe('GET /posts/:id', () => {
    test('Check if the API returns 200 and correct post by id', async () => {
      const res = await api.getPostById(1);

      expect(res.status).toBe(200);
      console.log(res.data);
      expect(res.data.id).toBe(1);
      expect(res.data.userId).toBe(1);
      expect(typeof res.data.title).toBe('string');
      expect(res.data.title.length).toBeGreaterThan(0);
      expect(typeof res.data.body).toBe('string');
      expect(res.data.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /posts/:id/comments', () => {
    test('Check if the API returns 200 and comments that belong to the post', async () => {
      const res = await api.getPostComments(1);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
      expect(res.data.length).toBeGreaterThan(0);
      expect(res.data.every((c) => c.postId === 1)).toBe(true);
      expect(res.data[0]).toMatchObject({
        postId: expect.any(Number),
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
        body: expect.any(String),
      });
    });
  });

  describe('POST /posts', () => {
    test('Check if the API returns 201 and echoes the created post', async () => {
      const payload = { title: 'Test Post', body: 'Created by axios', userId: 1 };
      const res = await api.createPost(payload);

      expect(res.status).toBe(201);
      expect(typeof res.data.id).toBe('number');
      expect(res.data.title).toBe(payload.title);
      expect(res.data.body).toBe(payload.body);
      expect(res.data.userId).toBe(payload.userId);
    });

    test('Check if the API returns 201 with minimal payload and preserves userId', async () => {
      const payload = { userId: 2 };
      const res = await api.createPost(payload);

      expect(res.status).toBe(201);
      expect(typeof res.data.id).toBe('number');
      expect(res.data.userId).toBe(payload.userId);
    });
  });
});
