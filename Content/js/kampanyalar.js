document.addEventListener("DOMContentLoaded", async () => {
  const campaignsContainer = document.getElementById("elements");
  const campaignTemplate = document.getElementById("campaign-template");

  try {
    const response = await fetch("/campaigns");
    const campaigns = await response.json();

    campaigns.forEach((campaign) => {
      const campaignClone = campaignTemplate.content.cloneNode(true);

      const campaignName = campaignClone.querySelector(".name");
      campaignName.textContent = campaign.name;

      const campaignDescription = campaignClone.querySelector(".description");
      campaignDescription.textContent = campaign.description;

      const campaignImage = campaignClone.querySelector(".img");
      campaignImage.src = campaign.imgUrl;
      campaignImage.alt = campaign.name;

      campaignsContainer.appendChild(campaignClone);
    });
  } catch (err) {
    console.error(err);
  }
});
