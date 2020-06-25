import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, Picker, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { langs } from "./languages";
import { styles } from "./styles";

export function Index() {
  const [lang, setLang] = React.useState("en");
  const [wikipediaLocalized, setWikipediaLocalized] = React.useState(null);
  const [pageJson, setPageJson] = React.useState(null);

  React.useEffect(() => {
    if (!lang) {
      setLang("en");
      return;
    }
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
        // hack to stall wp link label when changing language, at the cost of one render
        setWikipediaLocalized(langs.find((e) => e.code === lang).wp);
      })
      .catch((error) => {
        console.log("fetch error: ", error);
      });
  };

  const handleSourceLink = () => {
    WebBrowser.openBrowserAsync(pageJson.content_urls.mobile.page);
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
            <TouchableOpacity
              style={styles.sourceLink}
              onPress={handleSourceLink}
            >
              <Text style={styles.sourceLinkText}>
                {wikipediaLocalized}: {pageJson.title}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      ) : null}
    </>
  );
}
