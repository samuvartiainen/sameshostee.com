import { randomInteger } from "./random"

export const addWordPositionsToHobbies = (minHeight, maxHeight, minWidth, maxWidth, hobbies) => {
  const positions = []
  let counter = 0
  const protection = 5000
  
  while (positions.length < 9 && counter < protection) {
    let overlapping = false
    let position = {
      top: randomInteger(minHeight, maxHeight),
      left: randomInteger(minWidth, maxWidth)
    }
    for (let j = 0; j < positions.length; j++) {
      const existing = positions[j]
      const diffLeft = Math.abs(existing.left - position.left)
      const diffTop = Math.abs(existing.top - position.top)
      const notEnoughDiffLeft = diffLeft < 125
      const notEnoughDiffTop = diffTop < 50
      if (notEnoughDiffLeft && notEnoughDiffTop) {
        overlapping = true
        break
      }
    }
    if (!overlapping) {
      positions.push(position)
      hobbies[positions.length - 1].top = position.top
      hobbies[positions.length - 1].left = position.left
    }
    counter++
  }

  return hobbies
}
