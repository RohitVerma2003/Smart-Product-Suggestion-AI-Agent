import React from 'react'

const useParser = () => {
    function parse(output) {
        try {
            // Step 1: Extract the array part from the string
            const arrayStart = output.indexOf("[");
            const arrayEnd = output.lastIndexOf("]");
            const arrayContent = output.slice(arrayStart, arrayEnd + 1);

            // Step 2: Add quotes around unquoted keys (like name: => "name":)
            const fixedJSON = arrayContent.replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":');

            // Step 3: Parse the cleaned string to JSON
            const result = JSON.parse(fixedJSON);

            return result;
        } catch (error) {
            console.error("Failed to parse embedded string:", error);
            return [];
        }
    }


    return { parse };

}


export default useParser
