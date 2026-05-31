import env from '../../../env.json' with { type: 'json' };
import { ApiClient } from '../ApiClient.js';

const JSONPLACEHOLDER_BASE_URL = env.JSONPLACEHOLDER_BASE_URL;

export class JsonPlaceholderApi extends ApiClient {
  constructor() {
    super(JSONPLACEHOLDER_BASE_URL);
  }

  getPosts() {
    return this.get('/posts');
  }

  getPostById(id) {
    return this.get(`/posts/${id}`);
  }

  getPostComments(id) {
    return this.get(`/posts/${id}/comments`);
  }

  createPost(data) {
    return this.post('/posts', data);
  }
}
