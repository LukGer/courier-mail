export const domain =
  {
    dev: "dev.courier.lukger.dev",
    prod: "courier.lukger.dev",
  }[$app.stage] ?? `${$app.stage}.courier.lukger.dev`;

export const zone = cloudflare.getZoneOutput({
  name: "lukger.dev",
});
