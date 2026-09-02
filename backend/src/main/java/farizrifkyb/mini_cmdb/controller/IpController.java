package farizrifkyb.mini_cmdb.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import farizrifkyb.mini_cmdb.entity.Ip;
import farizrifkyb.mini_cmdb.model.request.IpRequest;
import farizrifkyb.mini_cmdb.model.response.IpDetailResponse;
import farizrifkyb.mini_cmdb.model.response.IpResponse;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.IpService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class IpController {

    private final IpService ipService;

    @PostMapping("/api/ips")
    public WebResponse<IpResponse> createIp(@RequestBody @Valid IpRequest req) {
        return WebResponse.<IpResponse>builder().data(ipService.createIp(req)).build();
    }

    @GetMapping("/api/ips")
    public WebResponse<List<IpDetailResponse>> getAllIps() {
        return WebResponse.<List<IpDetailResponse>>builder().data(ipService.getAllIps()).build();
    }

    @GetMapping("/api/ips/{ipId}")
    public WebResponse<Ip> getIpById(@PathVariable("ipId") Long IpId) {
        return WebResponse.<Ip>builder().data(ipService.getIpById(IpId)).build();
    }

    @PutMapping("/api/ips/{ipId}")
    public WebResponse<Ip> updateIp(@PathVariable("ipId") Long IpId,
            @RequestBody @Valid IpRequest req) {
        return WebResponse.<Ip>builder().data(ipService.updateIp(IpId, req)).build();
    }

    @DeleteMapping("/api/ips/{ipId}")
    public WebResponse<String> deleteIp(@PathVariable("ipId") Long ipId) {
        return WebResponse.<String>builder().data(ipService.deleteIp(ipId)).build();
    }
}
