<template>
    <div>
        <Header></Header>
        <div class="profile">
            <div class="profile-container">
                <div class="profile-icon">
                    <img src="../../assets/profile.png">
                </div>
                <div class="name">
                    <p>{{userProfile.name}}</p>
                </div>
                <div class="phone">
                    <p>{{userProfile.phone}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Header from "../../components/Header";

    export default {
        components: {Header},

        data() {
            return {

            }
        },

        computed: {
            ...mapState(['userProfile'])
        }
    }
</script>
