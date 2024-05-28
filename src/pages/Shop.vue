<template>
    <div class="main">
        <TopHeading headingText="Shop" />
        <p>
            The soccer world has made it very exciting to purchase and buy the gear you need for proper game
            preparation.
        </p>

        <Listing itemName="Soccer Ball"
            itemDetails="High-quality soccer ball designed for durability and performance in any game."
            imageSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/11d17347-2265-45ce-8eb6-a22b0282918a/academy-voetbal-CkKSGj.png"
            link="/details" />
        <Listing itemName="Goalkeeper Gloves"
            itemDetails="Professional-grade gloves for the ultimate grip and protection in goalkeeping."
            imageSrc="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6093eaec-ca59-4783-bb96-d92bfbd02354/grip3-goalkeeper-gloves-6qNKWb.png"
            link="/glovesDetails" />
        <Listing itemName="Soccer Cleats"
            itemDetails="Top-notch soccer cleats that provide excellent traction and support on the field."
            imageSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae81e690-f1a2-459f-a399-a0016d906c96/mercurial-superfly-9-academy-high-top-voetbalschoen-LdqJ5H.png" link="/detailsCleats" />
        <Listing itemName="Soccer Jersey"
            itemDetails="Breathable and comfortable soccer jersey, perfect for intense matches."
            imageSrc="https://img01.ztat.net/article/spp-media-p1/8e3605d72a7a497890cd5e860bb8bae6/d0de1e645f0743548034efb9556f04a4.jpg?imwidth=1800&filter=packshot"
            link="/detailsJersey" />
    </div>
</template>

<script setup>
import TopHeading from '../components/TopHeading.vue'
import Listing from '../components/Listing.vue'
</script>

<style scoped>
/* Add your styles here */
</style>
