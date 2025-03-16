export const isValidJWT = (token: string): boolean => {
    // Simple validation: JWT consists of three parts separated by dots
    const parts = token.split('.');
    if (parts.length !== 3) {
      console.error('❌ JWT validation failed: token does not have three parts');
      return false;
    }

    try {
      // Try to decode the payload (middle part)
      const payload = JSON.parse(atob(parts[1]));

      // Check for expiration
      if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
        console.error('❌ JWT validation failed: token has expired');
        return false;
      }

      console.log('✅ JWT payload decoded successfully:', {
        exp: payload.exp ? new Date(payload.exp * 1000).toISOString() : 'none',
        iat: payload.iat ? new Date(payload.iat * 1000).toISOString() : 'none',
      });

      return true;
    } catch (e) {
      console.error('❌ JWT validation failed: could not decode payload', e);
      return false;
    }
  };