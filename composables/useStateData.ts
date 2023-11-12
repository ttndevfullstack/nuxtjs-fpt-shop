export function useStateData(initialPayload: any) {
  let state = useState('indexSelected', () => initialPayload);

  const setState = (payload: any) => {
    state.value = payload;
  };

  return { state, setState };
}
