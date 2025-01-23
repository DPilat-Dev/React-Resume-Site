const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  return () => {
    return (
        <section className="px-0 2xl:px-60 py-10 2xl:py-16 max-w-full mx-auto relative">
            <span className="hash-span" id={idName}>&nbsp;</span>
            <Component />
        </section>
      );
  };
};

export default SectionWrapper;