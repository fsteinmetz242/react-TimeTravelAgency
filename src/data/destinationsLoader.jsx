// ACHTUNG Datei muss in public Ordner liegen. Normale Pfadangabe wie in Linux geh tnicht bei fetch()

export const destinationLoader = async () => {
  const res = await fetch("/travel.json");
  if (res.status != 200) throw new Error("something went wrong while loading");
  const data = await res.json();
  return data;
};
