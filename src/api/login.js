import ApiHost from '../config';

export default {
  loginRequest: ({phone, password}) => {
    return {
      url: `${ApiHost}`,
      method: 'post',
      data: {
        phone,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },
  signupRequest: ({
    email,
    password,
    firstName,
    lastName,
    accessCode,
    isAgeConfirmed,
    isPrivacyPolicyConfirmed,
    isEULAConfirmed,
  }) => {
    return {
      url: `${ApiHost}api/v1/auth/register`,
      method: 'post',
      data: {
        email,
        password,
        firstName,
        lastName,
        accessCode,
        eighteenOver: isAgeConfirmed,
        privacyPolicy: isPrivacyPolicyConfirmed,
        eula: isEULAConfirmed,
      },
      headers: {},
    };
  },
};
