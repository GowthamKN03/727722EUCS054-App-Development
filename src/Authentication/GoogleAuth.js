
// export const initGoogleAuth = () => {
//     window.gapi.load('auth2', () => {
//       window.gapi.auth2.init({
//         client_id: '874888114408-0od2o09ugoa3jat7ddcrsv92gfbnluhp.apps.googleusercontent.com', // Replace with your client ID
//       }).then((auth2) => {
//         console.log('Google Auth initialized.');
//         // You can use auth2 here or export it if needed
//       });
//     });
//   };
  


export let auth2; // This will hold the Google Auth instance

export const initGoogleAuth = () => {
  return new Promise((resolve, reject) => {
    window.gapi.load('auth2', () => {
      auth2 = window.gapi.auth2.init({
        client_id: '874888114408-0od2o09ugoa3jat7ddcrsv92gfbnluhp.apps.googleusercontent.com', // Replace with your client ID
      });

      auth2.then(() => {
        console.log('Google Auth initialized.');
        resolve(auth2);
      }).catch((error) => {
        console.error('Error initializing Google Auth:', error);
        reject(error);
      });
    });
  });
};
