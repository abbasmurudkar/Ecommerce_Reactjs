// import React from 'react'
// import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite'
// import 'rsuite/dist/styles/rsuite-default.css';
// import { auth, database } from '../misc/Firebase';
// import firebase from 'firebase/app';
// const Signin = () => {

//     const onGoogleSignin = () => {
//         SigninProvider(new firebase.auth.GoogleAuthProvider())
//     }
//     const onFacebookSignin = () => {
//         SigninProvider(new firebase.auth.FacebookAuthProvider())

//     }
//     const onGithubSignin = () =>{
//         SigninProvider(new firebase.auth.GithubAuthProvider())
//     }
//     const SigninProvider = async (provider) => {
//   try{
//     const {additionalUserInfo,user} = await auth.signInWithPopup(provider)
//     if(additionalUserInfo.isNewUser){
//         database.ref(`/profiles/${user.uid}`).set({
//             name: user.displayName,
//             created : firebase.database.ServerValue.TIMESTAMP
//         })
//     }
//     console.log(additionalUserInfo,user)
//     Alert.success("Succesfull login",4000)
//   }catch(err){
// Alert.info(err.message,4000)
//   }
//     }
//     return (
//         <Container>
//             <Grid style={{ marginTop: "150px" }}>
//                 <Row>
//                     <Col xs={24} md={16} mdOffset={5}>
//                         <Panel>
//                             <div className="text-center">
//                                 <h1>WELCOME TO SELLING</h1>
//                                 <p>Everything you will get over here</p>
//                             </div>
//                             <div className="mt-3">
//                                 <Button block color="blue" onClick={onFacebookSignin}>
//                                     <Icon icon="facebook" /> Signin with Facebook
//                                 </Button>
//                                 <Button block color="green" onClick={onGoogleSignin}>
//                                     <Icon icon="google" /> Signin with google
//                                 </Button>
//                                 <Button block  onClick={onGithubSignin}>
//                                     <Icon icon="github" /> Signin with Github
//                                 </Button>
//                             </div>
//                         </Panel>
//                     </Col>
//                 </Row>
//             </Grid>
//         </Container>
//     )
// }

// export default Signin
