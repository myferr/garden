const API_URL = "https://gardenapi_lkjhgfdsw.pages.dev/";

export function gardenAPI() {
  const data = fetch(API_URL).then((res) => {
    return res;
  });

  return data;
}
