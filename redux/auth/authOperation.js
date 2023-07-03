
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { authSlice } from './authReducer';


export const authSingUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await auth.currentUser;

      await updateProfile(user, {
        displayName: login,
      });
      const { uid, displayName } = await auth.currentUser;

      const userUpdateProfile = {
        userId: uid,
        nickName: displayName,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));

    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

export const authSingInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      //   console.log(user)
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

export const authSingOutUser = () => async (dispatch, getState) => { };


export const authStateChangeUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        nickName: user.displayName,
      };
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    }
  });
};