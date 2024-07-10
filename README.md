# form
#STEP 1
git clone <git-file-link>

#STEP 2
go to git project directory,and perform this command
npm install express firebase-admin

#STEP 3
go to firebase website and create a firestore database and after creating database , go to the project settings->Service Accounts->Generate new private key and downloading just rename file to serviceAccountKey.json and add it to the root directory of the project

#STEP 4
node app.js
