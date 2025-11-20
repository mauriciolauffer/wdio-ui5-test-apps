describe("ui5 basic", () => {
  let mock;

  before(async () => {
    mock = await browser.mock(
      "https://ui5.sap.com/1.136.10/test-resources/sap/m/demokit/orderbrowser/webapp/localService/mockdata/Orders.json"
    );
    mock.respond([
      {
        OrderID: 7918,
        CustomerID: "TORTU",
        CustomerName: "Tortuga Restaurante",
        EmployeeID: 7424,
        OrderDate: "/Date(1474149600000)/",
        RequiredDate: "/Date(1475186400000)/",
        ShippedDate: "/Date(1474840800000)/",
        ShipVia: 6030,
        Freight: 7948.67,
        ShipName: "ExcellentParcel",
        ShipAddress: "Tottenham Court Road",
        ShipCity: "London",
        ShipRegion: "Greater London",
        ShipPostalCode: "N170AA",
        ShipCountry: "United Kingdom",
      },
    ]);

    await browser.url(
      "https://ui5.sap.com/1.136.10/test-resources/sap/m/demokit/orderbrowser/webapp/test/mockServer.html"
    );
  });

  it("window should have the right title", async () => {
    const title = await browser.getTitle();
    expect(title).toEqual("Browse Orders");
  });

  it("wdi5 should open and close a dialog", async () => {
    const filterButton = await $(
      "#container-orderbrowser---master--filterButton"
    );
    expect(await filterButton.getAttribute("title")).toEqual("Filter");
    await filterButton.click();
    const acceptButton = await $(
      "#container-orderbrowser---master--viewSettingsDialog-acceptbutton"
    );
    // expect(await acceptButton.getText()).toEqual("OK")
    await acceptButton.click();
    console.log("MOCK CALLS:");
    console.dir(mock.calls);
  });
});
