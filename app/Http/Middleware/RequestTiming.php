<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class RequestTiming
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $start = microtime(true);

        $response = $next($request);

        $duration = round(microtime(true) - $start, 4);

        $response->headers->set('X-Request-Duration', $duration);

        $content = $response->getContent();
        if ($content !== false) {
            $content = str_replace('--RequestDuration--', $duration, $content);
            $response->setContent($content);
        }

        return $response;
    }
}
