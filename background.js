// // built by Theo Maurino in 2025
// const BANNED_DOMAINS = [
//     // OpenAI
//     "*://*.openai.com/*",
//     "*://*.openaiapi.com/*",
//     "*://*.oaistatic.com/*",
//     "*://*.chat.openai.com/*",
//     "*://*.api.openai.com/*",
//     "*://*.chatgpt.com/*",

//     // Google (Gemini/Vertex)
//     "*://*.google.ai/*",
//     "*://*.gemini.google.com/*",
//     "*://*.gemini.googleusercontent.com/*",
//     "*://*.cloud.google.com/*",  // may have to remove this... can't just block cloud.google.com
//     "*://*.ai.google.dev/*",

//     // Anthropic / Claude
//     "*://*.anthropic.com/*",
//     "*://*.claude.ai/*",
//     "*://*.console.anthropic.com/*",

//     // Microsoft (Azure AI/Copilot)
//     "*://*.azure.microsoft.com/*",
//     "*://*.oai.azure.com/*",
//     "*://*.copilot.microsoft.com/*",
//     "*://*.copilot-pro.microsoft.com/*",
//     // "*://*.bing.com/chat*",

//     // Meta (LLaMA, AI Studio)
//     "*://*.ai.meta.com/*",
//     "*://*.facebook.com/ai*",

//     // IBM (Watsonx)
//     "*://*.watsonx.ai/*",

//     // AWS (Lex, Bedrock)
//     "*://*.lex.amazonaws.com/*",
//     "*://*.bedrock.amazonaws.com/*", 

//     // Hugging Face
//     "*://*.huggingface.co/*",
//     "*://*.huggingface.com/*",
//     "*://*.api-inference.huggingface.co/*",

//     // Misc
//     "*://*.api.deepseek.com/*",
//     "*://*.botlibre.com/*",
//     "*://*.ada.support/*"
// ];

// essentially now all we have to do is block requests before they're sent

// chrome.webRequest.onBeforeRequest.addListener(
//     (details) => {
//         console.log("Blocked request to an AI service: ", details.url);
//         return {
//             cancel : true
//         };
//     },
//     {urls : BANNED_DOMAINS},
//     ["blocking"]
// );

// no longer using webRequestBlock (deprecated)

// console.log("BLOCKED DOMAINS : ", BANNED_DOMAINS);

// RULES CONSTANT -- REMEMBER TO UPDATE IF YOU UPDATE DOMAINS:

// const rules = [
//     {
//       "id": 1,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||openai.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 2,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||openaiapi.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 3,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||oaistatic.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 4,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||chat.openai.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 5,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||chatgpt.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 6,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||google.ai^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 7,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||gemini.google.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 8,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||gemini.googleusercontent.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 9,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||ai.google.dev^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 10,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||anthropic.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 11,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||claude.ai^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 12,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||oai.azure.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 13,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||copilot.microsoft.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 14,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||copilot-pro.microsoft.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 15,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||ai.meta.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 16,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||watsonx.ai^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 17,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||lex.amazonaws.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 18,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||bedrock.amazonaws.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 19,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||huggingface.co^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 20,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||api-inference.huggingface.co^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
  


//     {
//       "id": 21,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||api.deepseek.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 22,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||deepseek.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },
//     {
//       "id": 23,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||chat.deepseek.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },



//     {
//       "id": 24,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||ada.support^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },

//     {
//       "id": 25,
//       "priority": 1,
//       "action": { "type": "block" },
//       "condition": {
//         "urlFilter": "||generativelanguage.googleapis.com^",
//         "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//       }
//     },

//     {
//         "id": 26,
//         "priority": 1,
//         "action": { "type": "block" },
//         "condition": {
//           "urlFilter": "||poe.com^",
//           "resourceTypes": ["main_frame", "xmlhttprequest", "script"]
//         }
//       }
//   ];

  // doing this means i had to remove the following from manifest.json (in declarativeNetRequest rules):
//   "rule_resources": [
//     {
//         "id": "ruleset_1",
//         "enabled" : true,
//         "path" : "rules.json"
//     }
//   ]

// load initial active state

let isEnabled = true;
chrome.storage.sync.get(['isEnabled'], (result) => {
    isEnabled = result.isEnabled !== false;
    updateRules();
});

// listen
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateRules") {
        isEnabled = request.isEnabled;
        updateRules();
    }
});

async function updateRules() {
    // const ruleIds = (await chrome.declarativeNetRequest.getDynamicRules()).map((rule) => rule.id);
    // console.log("rules : ", ruleIds);



    if (isEnabled) {
        await chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds : ["ruleset_1"],
            disableRulesetIds : []
        });
    } else {
        await chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds : ["ruleset_1"],
            enableRulesetIds : []
        });
    }
}