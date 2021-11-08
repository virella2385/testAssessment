class testAssessment {

    aboveBelow(numList, compareValue) {
    	let aboveCnt = 0, belowCnt = 0;
      
    	if (numList && numList.length && compareValue) {
          	for (let el of numList) {
            	if (el > compareValue) {
              	 aboveCnt++;
              } else if (el < compareValue) {
              	 belowCnt++;
              }
            }
      }

      return { "above": aboveCnt, "below": belowCnt };
    }

    stringRotation(originalStr, rotationCnt) {
        let resultStr = originalStr;
      
        if (originalStr && rotationCnt > 0) {
            let stringArray = originalStr.split(''),        
                rotateChars = [];

            for (let i = 0; i < rotationCnt; i++) {
                rotateChars.push(stringArray.pop());
            }
        
            resultStr = [...rotateChars.reverse(), ...stringArray];    
        }

      return resultStr;
    }

}