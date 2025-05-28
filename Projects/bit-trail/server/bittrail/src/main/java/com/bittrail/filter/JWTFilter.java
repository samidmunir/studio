package com.bittrail.filter;

import com.bittrail.util.JWTUtil;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JWTFilter extends OncePerRequestFilter {
    @Autowired
    private JWTUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        String token = null;
        String email = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            email = jwtUtil.extractEmail(token);
        }

        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            if (jwtUtil.validateToken(token)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(email, null, null);

                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }

        filterChain.doFilter(request, response);
    }
}

// package com.bittrail.filter;

// import com.bittrail.util.JWTUtil;
// import jakarta.servlet.*;
// import jakarta.servlet.http.*;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.*;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;

// @Component
// public class JWTFilter extends OncePerRequestFilter {

//     @Autowired
//     private JWTUtil jwtUtil;

//     @Override
//     protected void doFilterInternal(HttpServletRequest request,
//                                     HttpServletResponse response,
//                                     FilterChain filterChain)
//             throws ServletException, IOException {

//         final String authHeader = request.getHeader("Authorization");

//         String token = null;
//         String email = null;

//         try {
//             if (authHeader != null && authHeader.startsWith("Bearer ")) {
//                 token = authHeader.substring(7);
//                 email = jwtUtil.extractEmail(token);
//             }

//             if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                 if (jwtUtil.validateToken(token)) {
//                     UsernamePasswordAuthenticationToken auth =
//                             new UsernamePasswordAuthenticationToken(email, null, null);
//                     auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                     SecurityContextHolder.getContext().setAuthentication(auth);
//                 }
//             }
//         } catch (Exception ex) {
//             // Logging would be better here for debugging
//             // But don't throw, just proceed without setting auth
//         }

//         filterChain.doFilter(request, response);
//     }
// }

// package com.bittrail.filter;

// import com.bittrail.util.JWTUtil;
// import jakarta.servlet.*;
// import jakarta.servlet.http.*;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;

// @Component
// public class JWTFilter extends OncePerRequestFilter {

//     @Autowired
//     private JWTUtil jwtUtil;

//     @Override
//     protected void doFilterInternal(HttpServletRequest request,
//                                     HttpServletResponse response,
//                                     FilterChain filterChain)
//             throws ServletException, IOException {

//         final String authHeader = request.getHeader("Authorization");
//         String token = null;
//         String email = null;

//         try {
//             if (authHeader != null && authHeader.startsWith("Bearer ")) {
//                 token = authHeader.substring(7);
//                 email = jwtUtil.extractEmail(token);
//             }

//             if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                 if (jwtUtil.validateToken(token)) {
//                     UsernamePasswordAuthenticationToken auth =
//                             new UsernamePasswordAuthenticationToken(email, null, null);
//                     auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                     SecurityContextHolder.getContext().setAuthentication(auth);
//                 }
//             }

//         } catch (Exception ex) {
//             // Just log or skip silently — NEVER block here
//         }

//         filterChain.doFilter(request, response);
//     }
// }
