<div align="center">
<img width='450' src='./harmony-client/public/images/logo/harmony_full.svg' >
</div>

## About

-   This website was built as a way to participate in the [**Steam Hacks Hackathon Round 2**](https://sites.google.com/steamforvietnam.org/steamhacks23/t%E1%BB%95ng-quan-cu%E1%BB%99c-thi/round-2/mental-health)
-   Specialized in mental health support for teenagers specifically

## Features

-   [x] Forum / Community
-   [x] A small minigame
-   [ ] Information / Advice library
-   [ ] Realtime AI Doctor
-   [ ] Emotion Tracking Diary

## Local installation

1. Make sure you both have **NodeJS** and **Git** installed
2. Clone the project on your local machine

```bash
$ git clone https://github.com/MinhMiner672/Harmony.git
```

3. Navigate to the `/harmony-client` folder
4. Run these commands below in order

```bash
$ npm install # Install all dependencies
...
$ npm run dev # Start the web
...url: http://localhost:3000
```

5. Open [http://localhost:3000](http://localhost:3000) to see the result

## Firebase Configuration

Since the project uses [**Cloud Firestore**](https://firebase.google.com/docs/firestore?hl=vi) as the main database, it is recommended that you [create your own Firebase App](https://firebase.google.com/docs/firestore/quickstart?hl=en) and copy paste its [config code](https://support.google.com/firebase/answer/7015592#zippy=%2Cin-this-article) into [**firebaseUtils.js**](https://github.com/MinhMiner672/Harmony/blob/main/harmony-client/src/app/lib/firebaseUtils.js), after that, create a **collection** in the Firebase console named `forum-data`

```js
// firebaseUtils.js
...
const firebaseConfig = {
	// Your firebase config
}
...
```

## Hosting

This website has not been yet hosted for public use (coming soon)
