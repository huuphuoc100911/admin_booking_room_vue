<template>
    <div class="dashboard-content">

        <!-- Titlebar -->
        <div id="titlebar">
            <div class="row">
                <div class="col-md-12">
                    <h2>Bookings</h2>
                    <!-- Breadcrumbs -->
                    <nav id="breadcrumbs">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li>Bookings</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <div class="row">

            <!-- Listings -->
            <div class="col-lg-12 col-md-12">
                <div class="dashboard-list-box margin-top-0">

                    <!-- Booking Requests Filters  -->
                    <div class="booking-requests-filter">

                        <!-- Sort by -->
                        <div class="sort-by">
                            <div class="sort-by-select">
                                <select data-placeholder="Default order" class="chosen-select-no-single">
                                    <option>All Listings</option>
                                    <option>Burger House</option>
                                    <option>Tom's Restaurant</option>
                                    <option>Hotel Govendor</option>
                                </select>
                            </div>
                        </div>

                        <!-- Date Range -->
                        <div id="booking-date-range">
                            <span></span>
                        </div>
                    </div>

                    <!-- Reply to review popup -->
                    <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
                        <div class="small-dialog-header">
                            <h3>Send Message</h3>
                        </div>
                        <div class="message-reply margin-top-0">
                            <textarea cols="40" rows="3" placeholder="Your Message to Kathy"></textarea>
                            <button class="button">Send</button>
                        </div>
                    </div>

                    <h4>Booking Requests</h4>
                    <ul>
                        <li v-for="(ticket, index) in listTicket" :key="index" class="pending-booking">
                            <div class="list-box-listing bookings">
                                <div class="list-box-listing-img">
                                    <img v-if="ticket.userId" :src="ticket.userId.avatar" />
                                    <img v-else
                                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120"
                                        alt="">
                                </div>
                                <div class="list-box-listing-content">
                                    <div class="inner">
                                        <h3>{{ ticket.roomId?.name }}
                                            <span v-if="ticket.roomId?.pool" class="booking-status">Pool</span>
                                            <span v-if="ticket.roomId?.gym" class="booking-status">Gym</span>
                                            <span v-if="ticket.roomId?.elevator" class="booking-status">Elevator</span>
                                            <span v-if="ticket.roomId?.elevator" class="booking-status">Dryer</span>
                                        </h3>

                                        <div class="inner-booking-list">
                                            <h5>Booking Date:</h5>
                                            <ul class="booking-list">
                                                <li class="highlighted">{{ ticket.checkIn }} - {{ ticket.checkOut }}</li>
                                            </ul>
                                        </div>

                                        <div class="inner-booking-list">
                                            <h5>Booking Details:</h5>
                                            <ul class="booking-list">
                                                <li class="highlighted">{{ ticket.roomId?.guests }} Adults</li>
                                            </ul>
                                        </div>

                                        <div class="inner-booking-list">
                                            <h5>Price:</h5>
                                            <ul class="booking-list">
                                                <li class="highlighted">{{ ticket.roomId?.price.toLocaleString('it-IT', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                }) }}</li>
                                            </ul>
                                        </div>

                                        <div class="inner-booking-list">
                                            <h5>Client: </h5>
                                            <ul class="booking-list">
                                                <li>{{ ticket.userId?.name }}</li>
                                                <li>{{ ticket.userId?.email }}</li>
                                                <li>{{ ticket.userId?.phone }}</li>
                                            </ul>
                                        </div>

                                        <a href="#small-dialog" class="rate-review popup-with-zoom-anim"><i
                                                class="sl sl-icon-envelope-open"></i> Send Message</a>

                                    </div>
                                </div>
                            </div>
                            <div class="buttons-to-right">
                                <a href="#" class="button gray reject"><i class="sl sl-icon-close"></i> Reject</a>
                                <a href="#" class="button gray approve"><i class="sl sl-icon-check"></i> Approve</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Copyrights -->
            <div class="col-md-12">
                <div class="copyrights">© 2021 Listeo. All Rights Reserved.</div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'BookingView',
    setup() {
        const store = useStore();
        store.dispatch("ticket/getAllTicketAction");
        const listTicket = computed(() => store.state.ticket.listTicket);

        return {
            listTicket
        }
    }
}
</script>

<style lang="scss"></style>