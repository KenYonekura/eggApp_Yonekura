import { StatusBar } from "expo-status-bar";
// HookするためにuseStateをimportする
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
// 画像をインポートして使用する
import egg1 from "./assets/egg01.png";
import egg2 from "./assets/egg02.png";
import egg3 from "./assets/egg03.png";

export default function App() {
  // カウントを表すcountとカウント数を更新するsetCountをペアで宣言する｡
  // useStateの()の中は初期値を表す
  const [count, setCount] = useState(100);

  // カウントダウンさせる関数countDownの宣言｡countDownが発動するころで初期値useStateが1ずつ引かれ､setCountに値が入る
  const countDown = () => {
    setCount(count - 1);
  };

  // テキストラベルにカウントごとに表示させる変数
  let textLabel;

  // タマゴ画像の初期値
  const imageArray = [egg1, egg2, egg3];
  let eggImage = imageArray[0];
  // タマゴ画像の配列
  if (count <= 70 && count >= 30) {
    eggImage = imageArray[1];
  } else if (count < 30 && count >= ) {
    eggImage = imageArray[1];
  } else if (count === 0) {
    eggImage = imageArray[2];
  } 
  else if (count < 0) {
    eggImage = imageArray[2];
  } else {
    eggImage = imageArray[0];
  }
  //JavaScriptはコードが寛容であるため厳密等価演算子を使うのが効果的｡
  //ボタンを押した回数によって文章を変えるif文
  //10画像変わらず
  if (count === 70) {
    textLabel = "なかからおとがする｡うまれるまでもうすこしかかりそう";
    //2画像1に変わる
  } else if (count === 50) {
    textLabel = "うごいている！もうすぐうまれそう！";
    //0画像2に変わる
  } else if (count === 30) {
    textLabel = "おや･･････？";
    // dispImage();
  } else if (count < 0) {
    textLabel = "もう産まれている｡タップするな😠";
  } else {
    textLabel = count;
  }

  // UI部分｡
  return (
    <View style={styles.container}>
      <View style={styles.CountContainer}>
        <Text style={styles.CountText}>{textLabel}</Text>
      </View>

      <View>
        <Pressable onPress={countDown}>
          <Image source={eggImage} style={styles.eggImage} />
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  CountContainer: {
    width: 400,
    height: 90,
    position: "absolute",
    top: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  CountText: { color: "#00FF00", fontSize: 30 },
  textLabel: {
    width: 360,
    height: 70,
    position: "absolute",
    top: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  eggImage: {
    width: 280,
    height: 280,
    marginBottom: 30,
  },
});
