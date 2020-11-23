import { StatusBar } from "expo-status-bar";
// HookするためにuseStateをimportする
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
// 画像をインポートして使用する
import egg1 from "./assets/egg01.png";
import egg2 from "./assets/egg02.png";
import egg3 from "./assets/egg03.png";

export default function App() {
  // カウントするため､カウントを表すcountとカウント数を更新するsetCountをペアで宣言する｡
  // useStateの()の中は初期値を表す
  const [count, setCount] = useState(10);
  // カウントダウンさせる関数countDownの宣言｡countDownが発動するころで初期値useStateが1ずつ引かれ､setCountに値が入る
  const countDown = () => {
    setCount(count - 1);
  };
  // タマゴ画像の初期値
  let dispImageNum = 0;
  // タマゴ画像を表示するための関数｡タマゴが増えた時も対応できるようにあえて関数にする｡
  function dispImage() {
    // タマゴ画像の配列
    let imageArray = [egg1, egg2, egg3];
    // タマゴ画像をカウントの回数で変更させる
    let name = imageArray[dispImageNum];
  }
  // テキストラベルにカウントごとに表示させる宣言｡変数
  let textLabel: any = count;

  //ボタンを押した回数によって文章を変えるif文
  //100画像変わらず
  if (count == 7) {
    textLabel = "なかから音がする！もうすぐ生まれそう";
    //50画像1に変わる
  } else if (count == 2) {
    textLabel = "おや･･････？";
    dispImageNum += 1;
    //0画像2に変わる
  } else if (count == 0) {
    textLabel = "もう産まれている｡タップするな😠";
    dispImageNum += 1;
  } else if (count < 0) {
    textLabel = "おわります";
  }
  // この辺はUIだからノリで覚える
  return (
    <View style={styles.container}>
      <View style={styles.remainingCountContainer}>
        <Text style={styles.remainingCountText}>{textLabel}</Text>
      </View>

      <View>
        <Pressable onPress={countDown}>
          <Image source={dispImage} style={styles.eggImage} />
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
  remainingCountContainer: {
    width: 360,
    height: 70,
    position: "absolute",
    top: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
  },
  remainingCountText: { color: "#00FF00", fontSize: 30 },
  eggImage: {
    width: 280,
    height: 280,
    marginBottom: 30,
  },
});
