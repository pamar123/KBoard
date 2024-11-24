// client/src/utils/auth.ts
class AuthService {
  private emitAuthChange() {
    window.dispatchEvent(new Event('auth-change'));
  }

  getProfile() {
    const token = this.getToken();
    if (!token) return null;
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64));
      return payload;
    } catch (e) {
      return null;
    }
  }

  loggedIn() {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = this.getProfile();
      if (!payload) return false;
      return payload.exp > Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    this.emitAuthChange();
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    this.emitAuthChange();
    window.location.assign('/login');
  }
}

export default new AuthService();