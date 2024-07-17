import React from "react"

export default function Footer() {
    return (
        <footer>
                <h3>Let us come together</h3>
                <p class="ending-text">
                    Follow us on Instagram and Facebook to keep updated on whats new and whats hot
                </p>

                <div className = "container-fluid">
                    <div class="row social-row text-center">
                        <div class=" col-lg-3 col-sm-12">  <i class="social-icon fa-2x fab fa-facebook" aria-hidden="true"></i> </div>
                        <div class="col-lg-3 col-sm-12">  <i class="social-icon fa-2x fab fa-twitter" aria-hidden="true"></i></div>
                        <div class=" col-lg-3 col-sm-12">  <i class="social-icon fa-2x fab fa-instagram" aria-hidden="true"></i></div>
                        <div class=" col-lg-3 col-sm-12">  <i class="social-icon fa-2x fas fa-envelope" aria-hidden="true"></i></div>
                    </div>
                </div>
                <p class="copyright-text">© Copyright 2024 Anurag Kumar Thakur </p>
        </footer>
    )
}