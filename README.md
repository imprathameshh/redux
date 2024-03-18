PROJECT FLOW

1. Folder Structure:
   Create two folders: components and store.

2. Store Setup:
   Inside the store folder:
   a. Create a action reducers and store.js.
   b. Create action.js in action folder.
   c. Create userReducer.js in reducers folder.

3. Action Creators:
   In cakeActions.js, define action creators like setFormDetails() to dispatch actions.

4. In userReducer.js:
   a. Define the initial state.
   b. Create the userReducer function with parameters state and action.
   c. Use a switch statement to handle different action types and update the state accordingly.

5. Store Configuration:
   In store.js, set up the Redux store using createStore() from Redux and combine reducers if there are multiple reducers.

6. Component Integration:
   In index.js or any other relevant file:
   Wrap your application with the <Provider> component from react-redux to provide the Redux store to your components.

7. Component Creation:
   a. Inside the components folder, create components such as userDetail.js to interact with Redux state.
   b. Also in components folder, create components such as userDisplay.js to display a data.
   c. In userDetail.js, use hooks like useSelector() to access state and useDispatch() to dispatch a data.
