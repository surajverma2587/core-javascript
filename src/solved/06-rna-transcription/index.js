export const rnaTranscription = (dnaStrand) => {
  const validCharacters = ["G", "C", "T", "A"];

  if (!dnaStrand || typeof dnaStrand !== "string") {
    return "Failed to retrieve RNA transcription: Invalid DNA strand";
  }

  const isValidDNAStrand = dnaStrand
    .toUpperCase()
    .split("")
    .every((each) => {
      return validCharacters.includes(each);
    });

  if (isValidDNAStrand) {
    const rnaStrand = dnaStrand
      .toUpperCase()
      .split("")
      .map((each) => {
        switch (each) {
          case "G":
            return "C";
          case "C":
            return "G";
          case "T":
            return "A";
          case "A":
            return "U";
        }
      })
      .join("");
    return `RNA strand: ${rnaStrand}`;
  }

  return "Failed to retrieve RNA transcription: Invalid DNA strand";
};
