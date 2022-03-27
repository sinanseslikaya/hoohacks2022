// Display page content.
const setHTMLParams = async() => {
  console.log("FOO");
  // Load sites data to display site name, bias and reliability
  const newsSources = fetch("./media.json").then(response => response.json()).then(data => {return data});

  // Set site, bias and reliability elements in HTML
  const source = await newsSources;

  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    console.log(tabs[0].url);
    var url = tabs[0].url;
    console.log("ASAS");
    console.log(url);
    
    url = url.slice(6);
      for (var site of source){
        // console.log(site.url);
        if (site.url.includes(url) || url.includes(site.url)){
          // console.log(site.url);
          // Compose strings for bias and reliability details
          var biasDetails;
          var biasClass = "unknown";
          
          const Left = 'Left: <a href="https://www.msnbc.com/" target="_newtab">MSNBC</a>, <a href="https://www.cnn.com/" target="_newtab">CNN</a><br>';
          const LeftCenter = 'Left-Center: <a href="https://www.nbcnews.com/" target="_newtab">NBC</a>, <a href="https://abcnews.go.com/" target="_newtab">ABC</a><br>'
          const Center = 'Center: <a href="https://apnews.com/" target="_newtab">AP</a>, <a href="https://www.reuters.com/" target="_newtab">Reuters</a><br>'
          const RightCenter = 'Right-Center: <a href="https://nypost.com/" target="_newtab">New York Post</a>, <a href="https://www.wsj.com/" target="_newtab">Wall Street Journal</a><br>'
          const Right = 'Right: <a href="https://www.foxnews.com/" target="_newtab">Fox News</a>, <a href="https://www.oann.com/" target="_newtab">OAN</a><br>'

          const bias = site.bias_rating;
          if (-30 <= bias  && bias < -18){
            biasDetails = "This news site is known to have a strong left bias. Consider these news sites to read about this issue through a different lens:<br><br>" + LeftCenter + Center + RightCenter + Right;
            biasClass = "left";
          }else if (-18 <= bias && bias  < -6) {
            biasDetails = "This news site is known to have a weak left bias. Consider these news sites to read about this issue through a different lens:<br><br>" + Left + Center + RightCenter + Right;
            biasClass = "left-center";
          }else if (-6 <= bias && bias  < 6) {
            biasDetails = "This news site is known to be fairly unbiased. Consider these news sites to read about this issue through a different lens:<br><br>" + Left + LeftCenter + RightCenter + Right;
            biasClass = "center";
          }else if (6 <= bias && bias < 18) {
            biasDetails = "This news site is known to have a weak right bias. Consider these news sites to read about this issue through a different lens:<br><br>" + Left + LeftCenter + Center + Right;
            biasClass = "right-center";
          }else {
            biasDetails = "This news site is known to have a strong right bias. Consider these news sites to read about this issue through a different lens:<br><br>" + Left + LeftCenter + Center + RightCenter;
            biasClass = "right";
          }

          var reliabilityDetails;
          var reliabilityClass;

          const reliability = site.factual_reporting_rating;
          if (reliability == "VERY HIGH"){
            reliabilityDetails = "This site has a very high Factual Report Rating, meaning that any information presented here is highly likely to be correct. In spite of this, it might be worth checking any facts presented here with another (reliable) source!<br>";
            reliabilityClass = "very-high"
          }else if (reliability == "HIGH"){
            reliabilityDetails = "This site has a high Factual Report Rating. While any information presented here is likely to be correct, it's best to check with another reliable source before coming to any conclusions!<br>"
            reliabilityClass = "high"
          }else if (reliability == "MIXED"){
            reliabilityDetails = "This site has an average Factual Report Rating. It is possible that some information presented here is exaggerated or modified. It is highly recommended to verify facts presented here with another source.<br>"
            reliabilityClass = "mixed"
          }else{
            reliabilityDetails = "The reliability of this site is unknown.<br>"
            reliabilityClass = "unknown"
          }

          reliabilityDetails += '<br>As always, if you are ever doubtful that any information you see if false, it\'s best to check with a fact-checking website such as <a href="https://www.snopes.com/" target="_newtab">Snopes</a>.<br>'

          document.getElementById("popup-content").innerHTML = `
            <h1>News Essentials: ` + site.site_name + `</h1>
            <h2 class="` + biasClass + `">BIAS: ` + biasClass.toUpperCase() + `</h2>
            <p class="` + biasClass + `">` + biasDetails + `</p>
            <h2 class="` + reliabilityClass + `">RELIABILITY: ` + site.factual_reporting_rating + `</h2>
            <p class="` + reliabilityClass + `">` + reliabilityDetails + `</p>
          `;
          return;
        }
      }
      // If code reaches here, the site is unknown
      document.getElementById("popup-content").innerHTML = `
      <h1>News Essentials</h1>
      <h2 class="unknown">Sorry, we do not recognise this site.</h2>
      <p class="unknown">Try accessing one of the 1600+ news sites in our database to see details about its bias and reliability!</p>`
  });
}

window.addEventListener("load", setHTMLParams);
