export const createUISlice = (set, get) => {
  return {
    slideIndex: 0,
    setSlideIndex: (newSlideIndex) => set(() => ({slideIndex: newSlideIndex})),
  }
}
