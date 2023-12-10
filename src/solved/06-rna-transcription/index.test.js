import { rnaTranscription } from ".";

describe("rnaTranscription", () => {
  it("should return the expected RNA strand for a valid long DNA strand", () => {
    const expected = "RNA strand: UGCACCAGAAUU";
    const actual = rnaTranscription("ACGTGGTCTTAA");

    expect(actual).toEqual(expected);
  });

  it("should return the expected RNA strand for a valid short DNA strand", () => {
    const expected = "RNA strand: UGCA";
    const actual = rnaTranscription("ACGT");

    expect(actual).toEqual(expected);
  });

  it("should return the expected RNA strand for a valid lowercase DNA strand", () => {
    const expected = "RNA strand: UGCACCAGAAUU";
    const actual = rnaTranscription("acgtggtcttaa");

    expect(actual).toEqual(expected);
  });

  it("should return the expected RNA strand for a valid mixed case DNA strand", () => {
    const expected = "RNA strand: UGCACCAGAAUU";
    const actual = rnaTranscription("ACgTgGTcTtaA");

    expect(actual).toEqual(expected);
  });

  it("should return the error message for an invalid DNA strand containing other letters", () => {
    const expected = "Failed to retrieve RNA transcription: Invalid DNA strand";
    const actual = rnaTranscription("ACXGT");

    expect(actual).toEqual(expected);
  });

  it("should return the error message for an invalid DNA strand containing numbers", () => {
    const expected = "Failed to retrieve RNA transcription: Invalid DNA strand";
    const actual = rnaTranscription("A2CGT");

    expect(actual).toEqual(expected);
  });

  it("should return the error message for an invalid DNA strand containing special characters", () => {
    const expected = "Failed to retrieve RNA transcription: Invalid DNA strand";
    const actual = rnaTranscription("ACG!T");

    expect(actual).toEqual(expected);
  });

  it("should return the error message for an invalid DNA strand containing mixed invalid characters", () => {
    const expected = "Failed to retrieve RNA transcription: Invalid DNA strand";
    const actual = rnaTranscription("ACX2G!T");

    expect(actual).toEqual(expected);
  });

  it("should return the error message when DNA strand is undefined", () => {
    const expected = "Failed to retrieve RNA transcription: Invalid DNA strand";
    const actual = rnaTranscription();

    expect(actual).toEqual(expected);
  });

  it("should return the error message when DNA strand is empty string", () => {
    const expected = "Failed to retrieve RNA transcription: Invalid DNA strand";
    const actual = rnaTranscription("");

    expect(actual).toEqual(expected);
  });

  it("should return the error message when DNA strand is not a string", () => {
    const expected = "Failed to retrieve RNA transcription: Invalid DNA strand";
    const actual = rnaTranscription(123);

    expect(actual).toEqual(expected);
  });
});
