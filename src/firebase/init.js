import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDkYSqRkpphcqhmyCSKRGqNUjz7vF55S9M',
  authDomain: 'engagementkit.firebaseapp.com',
  databaseURL: 'https://engagementkit.firebaseio.com',
  projectId: 'engagementkit',
  storageBucket: 'engagementkit.appspot.com',
  messagingSenderId: '507809044667'
}

firebase.initializeApp(config)
