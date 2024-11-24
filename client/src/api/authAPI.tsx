// client/src/api/authAPI.tsx
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<string> => {
  try {
    // Validate that username and password are not null
    if (!userInfo.username || !userInfo.password) {
      throw new Error('Username and password are required');
    }

    const response = await fetch('/auth/login', {  // Changed from /api/login to /auth/login
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const { token } = await response.json();
    if (!token) {
      throw new Error('No token provided in response');
    }

    return token;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
};

export { login };