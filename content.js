// content.js
// Adam Dirting
<script src="jquery-csv.js"></script>

/**
 * seaches csv file
 * @param {string} url website url
 * @returns {string} see biasToColor(), filename for extension logo change
 */
function getBias(url){
    newsSources = $.csv.toArray(sources)
    for(let i = 0; i < newsSources.getLength(); i++){
        if (newsSources[i].includes(url,0)){
            return biasToColor(newsSources[i][bias_index])
        }
    }
}
function getConfidence(url){
    newsSources = $.csv.toArray(sources)
    for(let i = 0; i < newsSources.getLength(); i++){
        if (newsSources[i].includes(url,0)){
            return cnewsSources[i][confidence_index]
        }
    }
}
/**
 * Helper function for getBias that will provide the necessary image for extension color change.
 * @param {string} bias the bias of the provided url.
 * @return {string} the filename for bias level color.
 */
function biasToColor(bias){
    
    if (bias == "Left") {
        return ""
    }else if (bias == "Left-Center"){
        return ""
    }else if (bias == "Center"){
        return ""
    }else if (bias == "Right-Center"){
        return ""
    }else if (bias == "Right"){
        return ""
    }
}

