import React from "react";
import { Image, Picker, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { langs } from "./languages";
import { styles } from "./styles";

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

export function Index() {
  const [lang, setLang] = React.useState("en");
  const [pageJson, setPageJson] = React.useState(null);

  React.useEffect(() => {
    if (!lang) setLang("en");
    handleRefresh();
  }, [lang]);

  const handleLang = (langCode) => {
    setLang(langCode);
  };

  const handleRefresh = () => {
    fetchWiki(lang);
  };

  const fetchWiki = (lang) => {
    // const url = `http://${lang}.wikipedia.org/w/api.php?action=query&prop=revisions&format=json&rvprop=content&generator=random&grnnamespace=0&grnlimit=1`;
    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/random/summary`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPageJson(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <View style={styles.controls}>
        <TouchableOpacity onPress={handleRefresh}>
          <Icon name="refresh" type="font-awesome" />
        </TouchableOpacity>
        <Picker
          style={styles.langPicker}
          selectedValue={lang}
          onValueChange={(langCode) => handleLang(langCode)}
        >
          {langs.map((e) => (
            <Picker.Item key={e.code} label={e.name} value={e.code} />
          ))}
        </Picker>
      </View>

      {pageJson ? (
        <>
          <ScrollView
            style={styles.pageContainer}
            contentContainerStyle={styles.pageContent}
          >
            <Text style={styles.title}>{pageJson.title}</Text>
            <Text>{pageJson.description ? pageJson.description : null}</Text>
            {pageJson.thumbnail ? (
              <Image
                style={[
                  styles.thumbnail,
                  {
                    height: pageJson.thumbnail.height,
                    width: pageJson.thumbnail.width,
                  },
                ]}
                source={{ uri: pageJson.thumbnail.source }}
              ></Image>
            ) : null}
            <Text>{pageJson.extract}</Text>
          </ScrollView>
        </>
      ) : null}

      {/* <Text style={styles.instructions}>{instructions}</Text> */}
    </>
  );
}
